import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    Button
} from '@ellucian/react-design-system/core';
import { widthFluid } from '@ellucian/react-design-system/core/styles/tokens';
import financialAidData from '../data/data.json';
import { useCardControl } from '@ellucian/experience-extension-utils';

const styles = () => ({
    root: {
        width: widthFluid,
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f8f8f8',
        padding: '16px',
        maxWidth: 500,
        margin: '0 auto'
    },
    header: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: '8px'
    },
    year: {
        fontWeight: 'bold',
        marginBottom: '8px'
    },
    tableContainer: {
        maxHeight: 250,
        overflowY: 'auto',
        border: '1px solid #ddd',
        borderRadius: '4px',
        marginBottom: '12px'
    },
    th: {
        fontWeight: 'bold'
    },
    viewButton: {
        border: '1px solid red',
        color: 'red',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#ffe5e5'
        }
    }
});

const FinancialAidCardCard = (props) => {
    const { classes } = props;
    const { navigateToPage } = useCardControl();

    const yearData = financialAidData.financialAidYears.find(y => y.year === '23/24');

    const handleClick = () => {
        console.log("clicked");
        navigateToPage({
            route: `/financial-aid`,

        });
    };
  

    return (
        <div className={classes.root}>
            <Typography className={classes.header}>FINANCIAL AID</Typography>
            <Typography className={classes.year}>FIN AID YEAR : {yearData.year}</Typography>

            <div className={classes.tableContainer}>
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
                        {yearData.awards.map((award, index) => (
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

            <Button
                onClick={() => handleClick()}
                className={classes.viewButton}
            >
                View Details
            </Button>
        </div>
    );
};

FinancialAidCardCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FinancialAidCardCard);
