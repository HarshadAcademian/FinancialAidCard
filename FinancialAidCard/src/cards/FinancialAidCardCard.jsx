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
        margin: '0 auto',
        cursor: 'pointer', // 👈 show clickable pointer
        transition: 'background-color 0.2s ease-in-out',
        '&:hover': {
            backgroundColor: '#f0f0f0'
        }
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
        border: '1px solid #ddd',
        borderRadius: '4px',
        marginBottom: '12px'
    },
    th: {
        fontWeight: 'bold'
    }
});

const FinancialAidCardCard = (props) => {
    const { classes } = props;
    const { navigateToPage } = useCardControl();

    const yearData = financialAidData.financialAidYears.find(y => y.year === '23/24');

    const handleClick = () => {
        console.log("Card clicked");
        navigateToPage({
            route: `/financial-aid`,
        });
    };

    return (
        <div
            className={classes.root}
            role="button"
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handleClick();
                }
            }}
        >
            <Typography className={classes.header}>FINANCIAL AID</Typography>
            <Typography className={classes.year}>FIN AID YEAR : {yearData.year}</Typography>

            <div className={classes.tableContainer}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.th}>Aid Type</TableCell>
                            <TableCell className={classes.th} align="right">Amt Offered</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {yearData.awards.map((award, index) => (
                            <TableRow key={index}>
                                <TableCell>{award.period} - {award.fundDescription}</TableCell>
                                <TableCell align="right">${award.amountOffered.toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

FinancialAidCardCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FinancialAidCardCard);
