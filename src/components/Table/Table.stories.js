import Table from './Table';

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    backgroundColor: {control: 'color'}
  }
};

function Template(args) {
  return (
    <Table {...args} />
  );
}

export const Basic = Template.bind({});
Basic.args = {
  columns: [
    {
      id: 1,
      label: 'Column 1',
      name: 'column1',
      type: '1',
      options: []
    },
    {
      id: 2,
      label: 'Column 2',
      name: 'column2',
      type: '1',
      options: []
    },
    {
      id: 3,
      label: 'Column 3',
      name: 'column3',
      type: '1',
      options: []
    }
  ],
  rows: [
    {
      id: 1,
      label: 'Row 1'
    },
    {
      id: 2,
      label: 'Row 2'
    },
    {
      id: 3,
      label: 'Row 3',
      placeholder: 'Write a text'
    }
  ]
};
