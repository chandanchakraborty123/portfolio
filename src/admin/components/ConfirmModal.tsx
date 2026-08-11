import ModalShell from "./ModalShell";

function ConfirmModal({ onConfirm, onCancel }: any) {
  return (
    <ModalShell title="Confirm Delete" onClose={onCancel} size="sm" footer={
      <>
        <button className="btn btn-light border px-4" onClick={onCancel}>Cancel</button>
        <button className="btn btn-danger px-4" onClick={onConfirm}>Delete</button>
      </>
    }>
      <div className="py-1">
        <p className="mb-0 text-gray-700">Are you sure you want to delete this item?</p>
      </div>
    </ModalShell>
  );
}

export default ConfirmModal;