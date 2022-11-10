interface Environment {
  platform: string;
  device: string;
  browser: string;
}

const TestedDevice = (props: { environments: Environment[] }) => (
  <div>
    <h2>Tested device:</h2>
    {props.environments.map((environment) => (
      <div key={environment.platform}>
        <h3>Platform: {environment.platform}</h3>
        <p>Device: {environment.device}</p>
        <p>Browser: {environment.browser}</p>
      </div>
    ))}
  </div>
);

export default TestedDevice;
