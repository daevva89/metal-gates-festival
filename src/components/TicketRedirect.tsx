import React, { useEffect } from 'react';

const TicketRedirect: React.FC = () => {

    useEffect(() => {
        window.location.href = "https://metalgates.iabilet.ro";
    }, []);

    return (
        <div>
            Redirecting...
        </div>
    );
};

export default TicketRedirect;
export { };