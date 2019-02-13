import getReact from './source';
const { React, ReactDOM, Scheduler } = getReact();

const {
  unstable_ConcurrentMode: ConcurrentMode,
  Component,
  Suspense,
} = React;
const {
  unstable_scheduleCallback: scheduleCallback,
} = Scheduler;
const {
  unstable_createRoot: createRoot
} = ReactDOM;

const Tilt = React.lazy(() => import('./tilt'))

class App extends Component {
  state = {showTilt: false, showTiltChecked: false}
  toggleTilt = () => {
    this.setState(({ showTiltChecked }) => ({ showTiltChecked: !showTiltChecked }));

    scheduleCallback(() => {
      // this.setState({ update: 'lowPriority' });
      this.setState(({ showTilt }) => ({ showTilt: !showTilt }))
    });
  }
  render() {
    const {showTilt, showTiltChecked} = this.state
    return (
      <div>
        <label>
          show tilt
          <input
            type="checkbox"
            checked={showTiltChecked}
            onChange={this.toggleTilt}
          />
        </label>

        <div style={{height: 150, width: 200}} className="totally-centered">
          {showTilt ? (
            <Suspense maxDuration={1000} fallback="loading...">
              <Tilt>
                <div className="totally-centered">vanilla-tilt.js</div>
              </Tilt>
            </Suspense>
          ) : null}
        </div>
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(
  <ConcurrentMode>
    <App />
  </ConcurrentMode>,
)