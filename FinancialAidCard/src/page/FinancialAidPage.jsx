import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography
} from '@ellucian/react-design-system/core';
import financialAidData from '../data/data.json';

const styles = () => ({
    root: {
        maxWidth: 800,
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#fff'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginBottom: '16px',
        textTransform: 'uppercase'
    },
    th: {
        fontWeight: 'bold'
    }
});

const FinancialAidPage = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Financial Aid Details</Typography>

            {financialAidData.financialAidYears.map((year, yearIndex) => (
                <div key={yearIndex}>
                    <Typography variant="h6">FIN AID YEAR : {year.year}</Typography>

                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.th}>Aid Type</TableCell>
                                <TableCell className={classes.th} align="right">Amt Offered</TableCell>
                                <TableCell className={classes.th} align="right">Amt Accepted</TableCell>
                                <TableCell className={classes.th} align="right">Amt Paid</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {year.awards.map((award, index) => (
                                <TableRow key={index}>
                                    <TableCell>{award.period} - {award.fundDescription}</TableCell>
                                    <TableCell align="right">${award.amountOffered.toFixed(2)}</TableCell>
                                    <TableCell align="right">${award.amountAccepted.toFixed(2)}</TableCell>
                                    <TableCell align="right">${award.amountPaid.toFixed(2)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            ))}
        </div>
    );
};

FinancialAidPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FinancialAidPage);
