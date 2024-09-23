function openModal(project) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    let content = '';
    switch (project) {
        case 'project1':
            content = `<h3>Secure Messaging App</h3><p>Developed a secure messaging application using end-to-end encryption.</p>`;
            break;
        case 'project2':
            content = `<h3>Vulnerability Scanner</h3><p>Created a tool for scanning network vulnerabilities and generating reports.</p>`;
            break;
        case 'project3':
            content = `<h3>Cybersecurity Blog</h3><p>Read articles on the latest trends and tools in cybersecurity and cryptography.</p>`;
            break;
    }

    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}
