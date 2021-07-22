import React, { Component } from 'react';
import { Footer, Nav } from 'components';
import Typist from 'react-typist';
import { isMobile } from 'react-device-detect';
import { optionsFirst, optionsSecond, optionsThird } from 'data';
import Select from 'react-select';
import clipboard from 'assets/images/clipboard.svg';
import classnames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: JSON.parse(localStorage.getItem('dark')) || false,
      fastType: JSON.parse(localStorage.getItem('fastType')) || false,
      firstOption: null,
      showSecond: false,
      secondOption: null,
      showThird: false,
      thirdOption: null,
      nb: '',
      usage: '',
      copied: false
    };
  }

  handleToggle = (evt) => {
    const { id } = evt.target;

    this.setState(
      prevState => ({ [id]: !prevState[id] }),
      () => {
        localStorage.setItem(id, this.state[id]);
      }
    );
  };

  onFirstChange = (selectedOption) => {
    if (this.state.secondOption) {
      this.setState({
        firstOption: selectedOption,
        showSecond: true,
        secondOption: null,
        showThird: false,
        nb: '',
        usage: ''
      });
    } else if (optionsSecond[selectedOption.value].length === 1) {
      this.setState({ firstOption: selectedOption, showSecond: true });
      this.onSecondChange(optionsSecond[selectedOption.value][0]);
    } else {
      this.setState({ firstOption: selectedOption, showSecond: true });
    }
  };

  onSecondChange = (selectedOption) => {
    if (selectedOption.usage) {
      this.setState({ nb: '', usage: '' }, () => {
        this.setState({
          secondOption: selectedOption,
          showThird: false,
          nb: selectedOption.nb,
          usage: selectedOption.usage,
          thirdOption: null
        });
      });
    } else if (optionsThird[selectedOption.value].length === 1) {
      this.setState({
        secondOption: selectedOption,
        showThird: true,
        thirdOption: null,
        nb: '',
        usage: ''
      });
      this.onThirdChange(optionsThird[selectedOption.value][0]);
    } else {
      this.setState({
        secondOption: selectedOption,
        showThird: true,
        thirdOption: null,
        nb: '',
        usage: ''
      });
    }
  };

  onThirdChange = (selectedOption) => {
    this.setState({ nb: '', usage: '' }, () => {
      this.setState({
        thirdOption: selectedOption,
        nb: selectedOption.nb,
        usage: selectedOption.usage
      });
    });
  };

  onCopy = () => {
    this.setState({ copied: true }, () => {
      if (this.timeout) {
        clearInterval(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.setState({ copied: false });
      }, 1000);
    });
  };

  copyUsage = () => {
    const el = document.createElement('textarea');
    el.value = this.state.usage;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected = document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.onCopy();

    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };

  render() {
    const {
      dark,
      firstOption,
      secondOption,
      thirdOption,
      showSecond,
      showThird,
      fastType,
      nb,
      usage,
      copied
    } = this.state;
    const avgTypingDelay = fastType ? 0 : 50;

    return (
      <div className={classnames('home', { dark })}>
        <div className="container home__container">
          <Nav mode={dark} onToggle={this.handleToggle} fastType={fastType} />
          <div className="content">
            <div className="row">
              <div className="col-5">
                <h2 className="content__title  dark-white">
                  کاوشگر <span>دستورات</span> گیت
                </h2>
                <p className="content__subtitle dark-grey">
                  یافتن دستورات گیت مورد نیاز شما بدون نیاز به جست و جو در وب سایت ها.
                </p>

                <div className="options">
                  <h4 className="options__title">من می خواهم:</h4>

                  <Select
                    placeholder="..."
                    className="options-select"
                    classNamePrefix="options-select"
                    isSearchable={true}
                    onChange={this.onFirstChange}
                    value={firstOption}
                    options={optionsFirst}
                  />

                  {showSecond ? (
                    <Select
                      placeholder="..."
                      className="options-select"
                      classNamePrefix="options-select"
                      isSearchable={true}
                      onChange={this.onSecondChange}
                      value={secondOption}
                      options={optionsSecond[firstOption.value]}
                    />
                  ) : null}

                  {showThird ? (
                    <Select
                      placeholder="..."
                      className="options-select"
                      classNamePrefix="options-select"
                      isSearchable={true}
                      onChange={this.onThirdChange}
                      value={thirdOption}
                      options={optionsThird[secondOption.value]}
                    />
                  ) : null}
                </div>
              </div>
              <div className="col-7 boards">
                <div
                  className={`board__group board__group--1 ${isMobile && !usage ? ' d-none' : ''}`}
                >
                  <h2 className="board__title  dark-white">نحوه استفاده</h2>
                  <div className="board board--1">
                    <pre>
                      {usage.length ? (
                        <Typist avgTypingDelay={avgTypingDelay} cursor={{ show: false }}>
                          {usage}
                        </Typist>
                      ) : (
                        <div />
                      )}
                    </pre>
                    {usage.length ? (
                      <div className="copy">
                        <span className={`copy__popover ${copied ? 'show' : ''}`}>
                          command copied
                        </span>
                        <img
                          className="copy__image"
                          onClick={this.copyUsage}
                          src={clipboard}
                          alt="Clipboard"
                        />
                      </div>
                    ) : null}
                  </div>

                  {nb ? (
                    <div className="board__group board__group--2">
                      <h2 className="board__title  dark-white">توجه</h2>
                      <div className="board board--2">
                        <pre>
                          <Typist avgTypingDelay={avgTypingDelay} cursor={{ show: false }}>
                            {nb}
                          </Typist>
                        </pre>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <Footer dark={dark} />
        </div>
      </div>
    );
  }
}

export default App;
