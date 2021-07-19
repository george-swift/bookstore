import { useSelector } from 'react-redux';
import { IoWarningSharp } from 'react-icons/io5';
import { updateCompleted } from '../selectors';

const FlashMessage = () => {
  const { error } = useSelector((state) => state.notifications);
  const status = useSelector((state) => updateCompleted(state));

  return (
    <>
      {
        error !== null && (
          <div className="alert alert-danger" role="alert">
            <IoWarningSharp className="mb-1" />
            <span className="ms-2">{ error }</span>
          </div>
        )
      }
      {
        status && (
          <div className="alert alert-success" role="alert">
            Book successfully uploaded!
          </div>
        )
      }
    </>
  );
};

export default FlashMessage;
