const FeatureCard = ({ img, title, desc }) => {
    return (<>
        <div className="feature">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <b>{title}</b>
                <p>
                    {desc}
                </p>
            </div>
        </div>
    </>);
}

export default FeatureCard;