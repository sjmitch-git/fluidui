import { Button } from "../..";

import { MdPictureInPictureAlt } from "react-icons/md";

const PipControl = (duration: number, onPIP?: () => void) => {
  return (
    <div id="pip">
      <Button
        title="Toggle Picture in Picture"
        onClick={onPIP}
        btnBackground="transparent"
        btnColor="light"
        size="sm"
        className="lg:-ml-2"
        disabled={duration === 0}
      >
        <MdPictureInPictureAlt />
        <span className="sr-only">Toggle Picture in Picture</span>
      </Button>
    </div>
  );
};

export default PipControl;
