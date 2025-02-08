import { list } from "postcss";

export default {
    name:"order",
    type:"document",
    title:"Order",
    fields:[
    {
        name: "firstName",
            type:"string",
            title:"First Name",
        },
        {
            name: "lastName",
            type:"string",
            title:"Last Name",
        },
        {
            name: "email",
            type:"string",
            title:"Email",
            validation: (Rule: { required: () => { (): any; new(): any; email: { (): any; new(): any; }; }; }) => Rule.required().email()
        },
        {
            name:"address",
            title:"Address",
            type:"string"
        },
        {
            name:"city",
            title:"City",
            type:"string"
        },
        {
            name:"zipCode",
            title:"Zip Code",
            type:"string"
        },
        {
            name:"phone",
            title:"Phone",
            type:"string",
        },
        {
            name:"cartItems",
            title:"CartItems",
            type:"array",
            of:[
                {
                    type:"reference",
                    to:[{
                        type:"product"
                    }]
                }
            ]
        },

        {
            name:"total",
            title:"Total",
            type:"number"
        },
        {
            name:"discount",
            title:"Discount",
            type:"number"
        },
        {
            name:"order-date",
            title:"orderDate",
            type:"number"
        },
        {
            name:"status",
            title:"Status",
            type:"string",
            options:{list: [
                { title: 'Pending', value: 'pending' },
                { title: 'Processing', value: 'processing' },
                { title: 'Shipped', value:'shipped' },
                { title: 'Delivered', value: 'delivered' },
                { title: 'Cancelled', value: 'cancelled' },
            ],
            layout:"radio"
        },
        initialValue:"pending"
        }
    ]
}