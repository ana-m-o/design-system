import React from 'react';
import SelectableList from '../src/SelectableList';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const data = [
    { id: 1, name: 'Custom Data 1' },
    { id: 2, name: 'Custom Data 2' },
    { id: 3, name: 'Custom Data 2' },
    { id: 4, name: 'Custom Data 4' },
    { id: 5, name: 'Custom Data 5' },
    { id: 6, name: 'Custom Data 6' },
    { id: 7, name: 'Custom Data 7' },
];

const ItemComponent = ({ data }) => {
    return <p>{data.name}</p>;
};

describe('SelectableList component', () => {
    const onClickHandle = jest.fn();
    it('must render loading if data is null and idle true', () => {
        render(
            <SelectableList
                data={null}
                idle={true}
                selectedItemKeyValue={1}
                selectedItemKeyName="id"
                childRender={ItemComponent}
                onClickHandle={onClickHandle}
                emptyViewText="No deployments"
                selectedIndex={1}
                itemSize={50}
                listHeight={500}
                listWidth={500}
            />,
        );
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
    it('must render empty view if data is undefined and idle false', () => {
        render(
            <SelectableList
                data={undefined}
                idle={false}
                selectedItemKeyValue={1}
                selectedItemKeyName="id"
                childRender={ItemComponent}
                onClickHandle={onClickHandle}
                emptyViewText="No deployments"
                selectedIndex={1}
                itemSize={50}
                listHeight={500}
                listWidth={500}
            />,
        );
        expect(screen.getByText(/no deployments/i)).toBeInTheDocument();
    });
    it('must render an empty view if not data', () => {
        render(
            <SelectableList
                data={[]}
                selectedItemKeyValue={1}
                selectedItemKeyName="id"
                childRender={ItemComponent}
                onClickHandle={onClickHandle}
                emptyViewText="No deployments"
                selectedIndex={1}
                itemSize={50}
                listHeight={500}
                listWidth={500}
            />,
        );
        expect(screen.getByText(/no deployments/i)).toBeInTheDocument();
    });
    it('must render the component', () => {
        render(
            <SelectableList
                data={data}
                selectedItemKeyValue={1}
                selectedItemKeyName="id"
                childRender={ItemComponent}
                onClickHandle={onClickHandle}
                emptyViewText="No deployments"
                selectedIndex={1}
                itemSize={50}
                listHeight={500}
                listWidth={500}
            />,
        );
        expect(screen.getByText('Custom Data 1')).toBeInTheDocument();
    });
    it('onClickHandle must been called on item click', () => {
        render(
            <SelectableList
                data={data}
                selectedItemKeyValue={1}
                selectedItemKeyName="id"
                childRender={ItemComponent}
                onClickHandle={onClickHandle}
                emptyViewText="No deployments"
                itemSize={50}
                listHeight={500}
                listWidth={500}
            />,
        );
        userEvent.click(screen.getAllByRole('button')[0]);
        expect(onClickHandle).toHaveBeenCalledTimes(1);
    });
    it('onClickHandle must change the active item', () => {
        render(
            <SelectableList
                data={data}
                selectedItemKeyValue={1}
                selectedItemKeyName="id"
                childRender={ItemComponent}
                onClickHandle={onClickHandle}
                emptyViewText="No deployments"
                itemSize={50}
                listHeight={500}
                listWidth={500}
            />,
        );
        const secondItem = screen.getAllByRole('button')[1];
        userEvent.click(secondItem);
        expect(screen.getAllByRole('button')[1]).toHaveClass('active');
        const firstItem = screen.getAllByRole('button')[0];
        userEvent.click(firstItem);
        expect(screen.getAllByRole('button')[0]).toHaveClass('active');
    });

    it('handleKeyDown must change the active item', () => {
        render(
            <SelectableList
                data={data}
                selectedItemKeyValue={1}
                selectedItemKeyName="id"
                childRender={ItemComponent}
                onClickHandle={onClickHandle}
                emptyViewText="No deployments"
                itemSize={50}
                listHeight={500}
                listWidth={500}
            />,
        );
        const secondItem = screen.getAllByRole('button')[1];
        userEvent.click(secondItem);
        expect(screen.getAllByRole('button')[1]).toHaveClass('active');
        const firstItem = screen.getAllByRole('button')[0];
        userEvent.click(firstItem);
        expect(screen.getAllByRole('button')[0]).toHaveClass('active');
    });
    it('should not select an item if selectedItemKeyValue does not exist', () => {
        render(
            <SelectableList
                data={data}
                selectedItemKeyValue={13}
                selectedItemKeyName="id"
                childRender={ItemComponent}
                onClickHandle={onClickHandle}
                emptyViewText="No deployments"
                itemSize={50}
                listHeight={500}
                listWidth={500}
            />,
        );
        const items = screen.getAllByRole('button');
        items.map((item) => {
            expect(item).not.toHaveClass('active');
        });
    });
});
