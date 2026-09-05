function loadContactPage() {
    const contact = document.querySelector("#content");
    const contactPage = document.createElement("div");
    contact.appendChild(contactPage);

    contactPage.innerHTML = `
        <h1 class="first-row">CONTACT US</h1>

        <div class="second-row">
            <div class="text">
                <h2>Get In Touch</h2>
                <p>We would love to hear from you! Whether you want to reserve your favorite table for a special evening, plan a memorable event with loved ones, or simply have a question about our menu, our team is always here to help. Drop us a message, give us a call, or walk right through our doors to enjoy an unforgettable dining experience. We look forward to welcoming you!</p>
            </div>

            <div class="details">
                <h2>Your Details</h2>

                <form>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">NAME</label>
                            <input type="text" id="name" name="name" required>
                        </div>

                        <div class="form-group">
                            <label for="email">EMAIL</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="subject">SUBJECT</label>
                            <input type="text" id="subject" name="subject">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="comments">COMMENTS / QUESTIONS</label>
                            <textarea id="comments" name="comments"></textarea>
                        </div>
                    </div>

                    <button type="submit">CONTACT US</button>
                </form>
            </div>
        </div>

        <div class="third-row">
            <h1>Reserve A Table Now</h1>
            <button>MAKE A RESERVATION</button>
        </div>
    `;
}