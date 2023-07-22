import type { Meta,StoryObj} from '@storybook/react'
import { MyLabel } from "../../components/MyLabel"

const meta = {
    title:'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes:{
      color:{control:'select',options:['tertiary','secondary','primary']},
      size:{control:'select'},
      fontcolor:{control:'color'}
    }
  } satisfies Meta<typeof  MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;
  

// const Template:StoryObj<typeof MyLabel>=(args)=><MyLabel{...args}/>

export const  Basic: Story = {
    args: {
        label:'hola mundo',
        size:'normal',
        allCaps:false
    },
  };
  export const  AllCaps: Story = {
    args: {
      size:'normal',
      allCaps:true
  },
   
  };
  export const  Secondary: Story = {
    args: {
      size:'normal',
      color:'secondary'
  },
   };
   export const  Tertiary: Story = {
    args: {
      size:'normal',
      color:'tertiary'
  }, 
};
  export const CustomFontColor: Story = {
    args: {
      size:'h1',
     fontcolor:'#5517ac'
  }, 
};
  export const CustomBackgroundColor: Story = {
    args: {
      size:'h1',
     fontcolor:'white',
     backgroundColor:'black'
  }, 
  };
  

// export const Basic=Template.bind({});

// export const AllCaps=Template.bind({});

// export const Secondary=Template.bind({});

