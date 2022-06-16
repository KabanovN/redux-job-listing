import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleCards } from 'store/cards/cards-selectors';
import { addFilter } from 'store/filters/filter-actions';
import { selectFilters } from 'store/filters/filter-selectors';

import { JobPosition } from './JobPosition';

const JobList = () => {
    const dispatch = useDispatch();
    const currentFilters = useSelector(selectFilters);
    const cards = useSelector((state) =>
        selectVisibleCards(state, currentFilters)
    );

    const handlAddFilter = (filter) => {
        dispatch(addFilter(filter));
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

export { JobList };
