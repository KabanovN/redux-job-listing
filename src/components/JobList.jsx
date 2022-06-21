import { connect } from 'react-redux';
import { selectVisibleCards } from 'store/cards/cards-selectors';
import { addFilter } from 'store/filters/filter-actions';

import { JobPosition } from './JobPosition';

const _JobList = ({ cards, addFilter }) => {
    const handlAddFilter = (filter) => {
        addFilter(filter);
    };

    return (
        <div className='job-list'>
            {cards.map((card) => {
                return (
                    <JobPosition
                        key={card.id}
                        handlAddFilter={handlAddFilter}
                        {...card}
                    />
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    cards: selectVisibleCards(state, state.filters),
});

const JobList = connect(mapStateToProps, { addFilter })(_JobList);

export { JobList };
