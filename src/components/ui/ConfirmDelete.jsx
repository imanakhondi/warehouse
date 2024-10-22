function ConfirmDelete({ resourceName, onClose, disabled, onConfirm }) {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-base mb-8">
        Are you sure to delete the {resourceName} ?
      </h2>
      <div className="flex items-center justify-between w-full gap-x-2">
        <button
          className="flex-1 btn btn--primary"
          onClick={onClose}
          disabled={disabled}
        >
          cancel
        </button>
        <button
          className="flex-1 btn btn--danger"
          onClick={onConfirm}
          disabled={disabled}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
