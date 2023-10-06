import { useRecoilState } from "recoil";
import { finalCopy } from "./../../../shared/recoil.js";

function CopyCard({ copyText }) {
  const [copy, setCopy] = useRecoilState(finalCopy);
  return (
    <div>
      <div>
        <p>{copyText}</p>
      </div>
      <div>
        <button
          onClick={() => {
            setCopy(copyText);
          }}
          className="tooltip"
        >
          Set
          <span className="tooltiptext">
            This will set the text as the final copy.
          </span>
        </button>
      </div>
    </div>
  );
}

export default CopyCard;
