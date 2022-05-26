import React from 'react';

const Wigetlg = () => {
    const Button = ({type}) => {
        return <button className={"wigetlg_button" + type}>{type}</button>
    }
    return (
        <div className="wigetlg">
            <h3 className="wigetlg_title">Latest Transactions</h3>
            <table className="wigetlg_table">
                <tr className="wigetlg_tr">
                    <th className="wigetlg_th">Customer</th>
                    <th className="wigetlg_th">Date</th>
                    <th className="wigetlg_th">Amout</th>
                    <th className="wigetlg_th">Status</th>
                </tr>
                <tr className="wigetlg_tr">
                    <td className="wigetlg_user">
                        <img className="wigetlg_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7fTQLSR-lfDzV0V0yY6-c6-k8RNAYkSR9A&usqp=CAU"/>
                        <span className="wigetlg_name">Susan Corol</span>
                    </td>
                    <td className="wigetlg_date">2 jun 2022</td>
                    <td className="wigetlg_amout">$122.00</td>
                    <td className="wigetlg_status">
                        <button type="Apporved" className="wigetlg_Approved">Approved</button>
                    </td>
                </tr>

            </table>
            <table className="wigetlg_table">
    <tr className="wigetlg_tr">
        <th className="wigetlg_th">Customer</th>
        <th className="wigetlg_th">Date</th>
        <th className="wigetlg_th">Amout</th>
        <th className="wigetlg_th">Status</th>
    </tr>
    <tr className="wigetlg_tr">
        <td className="wigetlg_user">
            <img className="wigetlg_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7fTQLSR-lfDzV0V0yY6-c6-k8RNAYkSR9A&usqp=CAU"/>
            <span className="wigetlg_name">Susan Corol</span>
        </td>
        <td className="wigetlg_date">2 jun 2022</td>
        <td className="wigetlg_amout">$122.00</td>
        <td className="wigetlg_status">
            <button type="Apporved" className="wigetlg_Declined">Declined</button>
        </td>
    </tr>
</table>
<table className="wigetlg_table">
    <tr className="wigetlg_tr">
        <th className="wigetlg_th">Customer</th>
        <th className="wigetlg_th">Date</th>
        <th className="wigetlg_th">Amout</th>
        <th className="wigetlg_th">Status</th>
    </tr>
    <tr className="wigetlg_tr">
        <td className="wigetlg_user">
            <img className="wigetlg_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7fTQLSR-lfDzV0V0yY6-c6-k8RNAYkSR9A&usqp=CAU"/>
            <span className="wigetlg_name">Susan Corol</span>
        </td>
        <td className="wigetlg_date">2 jun 2022</td>
        <td className="wigetlg_amout">$122.00</td>
        <td className="wigetlg_status">
            <button type="Apporved" className="wigetlg_Panding">Panding</button>
        </td>
    </tr>
</table>
<table className="wigetlg_table">
    <tr className="wigetlg_tr">
        <th className="wigetlg_th">Customer</th>
        <th className="wigetlg_th">Date</th>
        <th className="wigetlg_th">Amout</th>
        <th className="wigetlg_th">Status</th>
    </tr>
    <tr className="wigetlg_tr">
        <td className="wigetlg_user">
            <img className="wigetlg_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7fTQLSR-lfDzV0V0yY6-c6-k8RNAYkSR9A&usqp=CAU"/>
            <span className="wigetlg_name">Susan Corol</span>
        </td>
        <td className="wigetlg_date">2 jun 2022</td>
        <td className="wigetlg_amout">$122.00</td>
        <td className="wigetlg_status">
            <button type="Apporved" className="wigetlg_Approved">Approved</button>
        </td>
    </tr>
</table>
        </div>
    );
};

export default Wigetlg;