var Calculator = React.createClass({
    render: function () {
        return (
            <div>
                <Inputbar />
                <Btn>NL</Btn>
                <Btn>/</Btn>
                <Btn>*</Btn>
                <Btn>-</Btn>
                <Btn>7</Btn>
                <Btn>8</Btn>
                <Btn>9</Btn>
                <Btn>+</Btn>
                <Btn>4</Btn>
                <Btn>5</Btn>
                <Btn>6</Btn>
                <Btn>.</Btn>
                <Btn>1</Btn>
                <Btn>2</Btn>
                <Btn>3</Btn>
                <Btn>0</Btn>
            </div>
        )
    }
});
var Inputbar = React.createClass({
    render: function () {
        return (
            <div>
                <input type='text' />
            </div>
        )
    }
});
var Btn = React.createClass({
    clicking: function(){
        
    },
    render: function () {
        return (
            <button className='btn'>{this.props.children}</button>
        )
    }
});

ReactDOM.render(<Calculator />, document.getElementById('calculator'));