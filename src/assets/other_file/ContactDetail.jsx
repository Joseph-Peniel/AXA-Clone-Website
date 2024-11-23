
import { useAppContext } from "./AppContext";
import ContactItem from "./ContactItem";

const ContactDetails = () => {
    const { contactDetails } = useAppContext();

    return (
        <table className='table table-small'>
            <ContactItem
                icon={<svg width='20' height='20' /* SVG for email */></svg>}
                label={contactDetails.email}
                link={`mailto:${contactDetails.email}`}
            />
            <ContactItem
                icon={<svg width='20' height='20' /* SVG for phone */></svg>}
                label={contactDetails.phone}
                link={`tel:${contactDetails.phone}`}
            />
            <ContactItem
                icon={<svg width='20' height='20' /* SVG for Facebook */></svg>}
                label={contactDetails.facebook}
                link='https://www.facebook.com/AXAMansard'
            />
            <ContactItem
                icon={<svg width='20' height='20' /* SVG for Twitter */></svg>}
                label={
                    <a href='javascript:void(0);' className='livechat-s'>
                        Start Live Chat
                    </a>
                }
            />
        </table>
    );
};

export default ContactDetails;
