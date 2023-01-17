const GuaranteeCard = ({ icon, title, desc }) => {
    return (
        <>
            <span className="gurantee-badge">
                <img src={icon} alt="" />
                <h4>
                    {title}
                </h4>
                <p>
                    {desc}
                </p>
            </span>
        </>
    )
}

export default GuaranteeCard;