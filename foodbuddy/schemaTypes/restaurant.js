import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restuarant',
  title: 'Restuarants',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: rule => rule.required()
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: rule => rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the restuarant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: rule => rule.required()
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Ratings between 1 to 5',
      validation: rule => rule.required().min(1).max(5).error("Please select a number between 1 and 5")
    },{
      name:"reviews",
      type:"string",
      title:"Reviews",
    },
    {
      name:"type",
      title:"Category",
      validation: rule => rule.required(),
      type:"reference",
      to: [{type: "category"}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }
  ],
})
