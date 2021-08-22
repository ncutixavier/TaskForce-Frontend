import React from 'react'

const Footer = () => {
    const items = [
        {
            text: "Email",
            value: <a href="mailto:ncuti60@gmail.com">ncuti60@gmail.com</a>
        },
        {
            text: "Phone",
            value: <a href="tel:+250783573335">+250783573335</a>
        },
        {
            text: "Profile",
            value: <a href="https://ncutixavier.github.io/">https://ncutixavier.github.io/</a>
        }
    ]
    return (
        <div className="footer" name="contact">
            <div className="footer-items">
                <div className="title">Reach me</div>

                {items.map(item => (
                    <div className="footer-item" key={item.text}>
                        <div className="text">{item.text}</div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>

            <div className="copyright">
                <span>Developed by Ncuti Xavier</span>
                <span>Designed by Awesomity Lab</span>
            </div>
        </div>
    )
}

export default Footer
