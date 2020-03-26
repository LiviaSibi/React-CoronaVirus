import React from 'react';

const stylep = {
    color: "#9c9c9c",
    margin: '10px 0'
};

const stylediv = {
    borderRadius: '10px',
    padding: '10px',
    margin: '0px 80px',
    textAlign: 'center',
    backgroundColor: '#4d4d4d',
    fontSize: '16px'
}

const styleFooter = {
    backgroundColor: '#363636',
    borderTop: '45px solid #86C9F5',
    padding: '25px 0px',
    marginLeft: '260px'
};

class Footer extends React.Component{
    render(){
        return(
            <footer style={styleFooter}>
                <div className="p-footer" style={stylediv}>
                    <p style={stylep}>Atenção | Esta interação é apenas uma análise e não um diagnóstico médico.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;