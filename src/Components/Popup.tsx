interface props {
  Trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  children?: any;
}
export default function Popup(props: props) {
  return props.Trigger ? (
    <>
      <div className="inset-y-0 flex h-100vh justify-items-center items-center ">
        <div className="p-32 w-screen h-min-screen w-max-2xl bg-gray-400">
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
