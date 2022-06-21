import { connect } from 'react-redux';
import { removeFilter, clearAllFilters } from 'store/filters/filter-actions';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

const _FilterPanel = ({ filters, removeFilter, clearAllFilters }) => {
    if (filters.length === 0) {
        return null;
    }

    return (
        <Card className='filter-panel'>
            <div className='filter-panel-wrapper'>
                <Stack>
                    {filters.map((filter) => {
                        return (
                            <Badge
                                key={filter}
                                variant='clearable'
                                onClear={() => removeFilter(filter)}>
                                {filter}
                            </Badge>
                        );
                    })}
                </Stack>

                <button className='link' onClick={clearAllFilters}>
                    Clear
                </button>
            </div>
        </Card>
    );
};

const mapStateToProps = (state) => ({
    filters: state.filters,
});

const FilterPanel = connect(mapStateToProps, { removeFilter, clearAllFilters })(
    _FilterPanel
);

export { FilterPanel };
