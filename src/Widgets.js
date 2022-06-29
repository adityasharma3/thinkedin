import React from 'react'
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import news_data from './newsData';

const Widgets = () => {
    const NewsArticles = ({ data }) => {

        return (
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordIcon />
                </div>

                <div className="widgets__articleRight">
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                </div>
            </div>
        )
    };

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Thinkedin News</h2>
                <InfoIcon />
            </div>

            {news_data.map((item) => {
                return (<NewsArticles data={item} key={item.id} />);
            })}
        </div>
    )
}

export default Widgets