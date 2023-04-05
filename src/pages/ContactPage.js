
import GithubIcon from '../assets/icons/github.svg';
import TwitterIcon from '../assets/icons/twitter.svg';
import LinkedinIcon from '../assets/icons/linkedin.svg';

function ContactPage() {
    return (
        <div className="contact">
            <div className='contact__content-box'>
                <h2 className='contact__title'>Get in Touch</h2>
                <div className='contact__text-box'>
                    <p className='contact__text'>
                        I’d love to hear about what you’re working on and how I could help.
                        I’m currently looking for a new role and am open to a wide range of opportunities.
                        My preference would be to find a position in a company in São Paulo. But
                        I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working
                        and positive person who will always approach each task with a sense of purpose and attention to detail.
                        Please do feel free to check out my online profiles below and get in touch using the form.
                    </p>
                    <ul className='contact__icons-list'>
                        <li className='contact__icons-item'>
                            <img alt="Github icon" src={GithubIcon} className="contact__icon" />
                        </li>
                        <li className='contact__icons-item'>
                            <img alt="Twitter icon" src={TwitterIcon} className="contact__icon" />
                        </li>
                        <li className='contact__icons-item'>
                            <img alt="Linkedin icon" src={LinkedinIcon} className="contact__icon" />
                        </li>
                    </ul>
                </div>
            </div>

            <div className='contact__content-box'>
                <h2 className='contact__title'>Contact Me</h2>

                <form className='form'>
                    <div className='form__box'>
                        <label className='form__label' htmlFor='name'>Name</label>
                        <input className='form__input' id='name' placeholder='Jane Appleseed'/>
                    </div>

                    <div className='form__box'>
                        <label className='form__label' htmlFor='email'>Email Address</label>
                        <input className='form__input' id='email' placeholder='email@example.com'/>
                    </div>
        
                    <div className='form__box'>
                        <label className='form__label' htmlFor='message'>Message</label>
                        <textarea className='form__input' id='message' placeholder='How can i help?'/>
                    </div>


                    <button className='form__button'>Send message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;