import moment from 'moment'
export default {
	properties: [
		{
			text: 'Fecha de emision',
			key: 'issued_at',
			type: 'date',
			is_date: true,
			value: moment().format('YYYY-MM-DD'),
			show: true,
		},
		{
			text: 'Importe', 
			key: 'amount',
			type: 'number',
			value: '',
			is_price: true,
			is_title: true,
			required: true,
		},
		{
			text: 'Factura',
			key: 'code',
			type: 'text',
			show: true,
		},
		{
			text: 'Observaciones',
			key: 'observations',
			type: 'textarea',
			show: true,
		},
	],
	singular_model_name_spanish: 'Compra',
	plural_model_name_spanish: 'Compras',
	create_model_name_spanish: 'Nueva compra',
	text_delete: 'la',
}