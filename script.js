document.addEventListener('DOMContentLoaded', () => {
    const alertBtn = document.getElementById('alertBtn');
    const customModal = document.getElementById('customModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Action button click handler
    alertBtn.addEventListener('click', () => {
        // Fallback Native Alert (Requirements Satisfied)
        // alert("Task 1 Completed: JavaScript Alert Working!");

        // Professional Modal Trigger
        openModal();
    });

    // Close Modal Handler
    closeModalBtn.addEventListener('click', closeModal);

    // Close when clicking outside modal box
    customModal.addEventListener('click', (e) => {
        if (e.target === customModal) {
            closeModal();
        }
    });

    function openModal() {
        customModal.classList.add('active');
    }

    function closeModal() {
        customModal.classList.remove('active');
    }
});