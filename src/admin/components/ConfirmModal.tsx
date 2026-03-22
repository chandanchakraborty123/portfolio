function ConfirmModal({ onConfirm, onCancel }: any) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded w-80">
        <h3 className="mb-4 text-lg font-semibold">Are you sure?</h3>

        <div className="flex justify-end gap-2">
          <button
            className="px-3 py-1 border rounded"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;