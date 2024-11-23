
const ContactItem = ({ icon, label, link }) => (
    <tr>
        <td align="center">
            {icon}
        </td>
        <td>
            {link ? <a href={link}>{label}</a> : <strong>{label}</strong>}
        </td>
    </tr>
);

export default ContactItem;
