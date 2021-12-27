import "./index.css";
import { Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

export default function App() {
  const free = [true, true, false, false, false, false];
  const plus = [true, true, true, true, true, false];
  const pro = [true, true, true, true, true, true];
  const color = { color: "grey" };
  const Plan = ({ data }) => {
    return (
      <div className="content">
        <p style={data[0] ? {} : color}>
          {data[0] ? <DoneIcon /> : <CloseIcon />}
          &nbsp; Unlimited Public Projects
        </p>
        <p style={data[1] ? {} : color}>
          {data[1] ? <DoneIcon /> : <CloseIcon />} &nbsp; Community Access
        </p>
        <p style={data[2] ? {} : color}>
          {data[2] ? <DoneIcon /> : <CloseIcon />} &nbsp; Unlimited Private
          Projects
        </p>
        <p style={data[3] ? {} : color}>
          {data[3] ? <DoneIcon /> : <CloseIcon />} &nbsp; Dedicated Phone
          Support
        </p>
        <p style={data[4] ? {} : color}>
          {data[4] ? <DoneIcon /> : <CloseIcon />} &nbsp; Free Subdomain
        </p>
        <p style={data[5] ? {} : color}>
          {data[5] ? <DoneIcon /> : <CloseIcon />} &nbsp; Monthly Status Reports
        </p>
      </div>
    );
  };
  const Card = ({ plan }) => {
    const styles = { display: "inline-block" };

    return (
      <div className="card">
        <div className="head">
          {plan === "FREE" ? (
            <div>
              <h6 className="planshead">{plan}</h6>
              <h1 style={styles}>$0</h1>/month
              <hr />
              <div className="content">
                <p>
                  <DoneIcon /> &nbsp; Single Users
                </p>
                <p>
                  <DoneIcon /> &nbsp; 5GB Storage
                </p>
              </div>
            </div>
          ) : plan === "PLUS" ? (
            <div>
              <h6 className="planshead">{plan}</h6>
              <h1 style={styles}>$9</h1>/month
              <hr />
              <div className="content">
                <p>
                  <DoneIcon /> &nbsp; 5 Users
                </p>
                <p>
                  <DoneIcon /> &nbsp; 50GB Storage
                </p>
              </div>
            </div>
          ) : (
            <div>
              <h6 className="planshead">{plan}</h6>
              <h1 style={styles}>$49</h1>/month
              <hr />
              <div className="content">
                <p>
                  <DoneIcon /> &nbsp; Unlimited Users
                </p>
                <p>
                  <DoneIcon /> &nbsp; 150GB Storage
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="plans">
          <Plan data={plan === "FREE" ? free : plan === "PLUS" ? plus : pro} />
          <Button>Button</Button>
        </div>
      </div>
    );
  };
  return (
    <div className="app flex">
      <div className="main">
        <Card plan="FREE"></Card>
      </div>
      <div className="main">
        <Card plan="PLUS"></Card>
      </div>
      <div className="main">
        <Card plan="PRO"></Card>
      </div>
    </div>
  );
}
