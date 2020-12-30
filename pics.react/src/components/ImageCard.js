import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();

    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    setSpans() {
        const height = this.imageRef.current.clientHeight;
    };
    render() {
        const { description, urls } = this.props.image;
        return (
            <div>
                <img
                    ref={this.imageRef}
                    alt={this.props.image.discription}
                    src={this.props.image.urls.full}

                />
            </div>
        );
    }
}

export default ImageCard;










