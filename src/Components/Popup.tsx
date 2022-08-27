interface props {
  Trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  children?: any;
}
export default function Popup(props: props) {
  return props.Trigger ? (
    <>
      <div className="Popup">
        <div className="Popup-inner">
          <button
            className="button-23  close-btn"
            onClick={() => props.setTrigger(false)}
          >
            Close
          </button>
          {props.children}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
