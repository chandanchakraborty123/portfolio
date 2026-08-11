import ModalShell from "./ModalShell";

function ConfirmModal({ onConfirm, onCancel }: any) {
  return (
    <ModalShell title="Confirm Delete" onClose={onCancel} size="sm" footer={
      <>
        <button className="btn btn-light btn-sm border px-3" onClick={onCancel}>Cancel</button>
        <button className="btn btn-danger btn-sm px-3" onClick={onConfirm}>Delete</button>
      </>
    }>
      <div className="py-2">
        <p className="mb-0 text-gray-700">Are you sure you want to delete this item?</p>
      </div>
    </ModalShell>
  );
}

export default ConfirmModal;