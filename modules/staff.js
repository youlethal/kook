// Staff Module
function initializeStaff() {
    const staffSection = document.createElement('section');
    staffSection.id = 'staff';
    staffSection.innerHTML = `
        <h2>Our Team</h2>
        <div class="staff-grid">
            <div class="staff-member">
                <img src="https://via.placeholder.com/200x200" alt="Staff Member">
                <h3>John Doe</h3>
                <p>Position</p>
            </div>
            <div class="staff-member">
                <img src="https://via.placeholder.com/200x200" alt="Staff Member">
                <h3>Jane Smith</h3>
                <p>Position</p>
            </div>
        </div>
    `;
    
    document.querySelector('main').appendChild(staffSection);
}