import parseSRT from 'parse-srt';
import React from 'react';
import './SubtitlePlayer.module.scss';

interface SubtitlePlayerProps { }

interface SubtitlePlayerState {
  time: number;
  lyric?: Lyrics;
}

interface Lyrics {
  id: number;
  start: number;
  end: number;
  text: string;
}

const UPDATE_INTERVAL = 100;

class SubtitlePlayer extends React.Component<SubtitlePlayerProps, SubtitlePlayerState> {

  constructor(props: SubtitlePlayerProps) {
    super(props);
    this._lyricId = 0;
    this._Mounted = false;
    this.state = {
      time: 0,
      lyric: undefined
    };
  }

  private _interval?: NodeJS.Timer;
  private _lyrics?: Lyrics[];
  private _lyricId: number;
  private _Mounted: boolean;

  componentDidMount() {
    if (!this._Mounted) {
      this._Mounted = true;
      this._loadAndPlay();
    }
  }

  componentWillUnmount() {
    if (!!this._interval) clearInterval(this._interval);
  }

  render() {
    return <div>
      <p>Time: {this.state?.time}</p>
      <p>Text: {this.state?.lyric?.text}</p>
    </div>;
  }

  private async _loadAndPlay() {
    await this._loadLyrics();
    this._interval = setInterval(this._beat.bind(this), UPDATE_INTERVAL);
  }

  private async _loadLyrics() {
    const response = await fetch('/subtitles/f-s_Vv82yFw.srt');
    this._lyrics = parseSRT(await response.text());
  }

  private _beat() {
    const initTime = this.state.time;
    this.setState({
      time: initTime + UPDATE_INTERVAL,
      lyric: this._findNextLyric()
    });
  }

  private _findNextLyric(id = this._lyricId): Lyrics | undefined {
    if (!this._lyrics || id >= this._lyrics.length)
      return undefined;
    const lyric = this._lyrics[id];
    const start = lyric.start * 1000;
    const end = lyric.end * 1000;
    const now = this.state.time;
    if (now <= end) {
      if (now < start) // didn't start yet
        return undefined;
      this._lyricId = id;
      return lyric;
    }
    return this._findNextLyric(id + 1);
  }

}

export default SubtitlePlayer;
