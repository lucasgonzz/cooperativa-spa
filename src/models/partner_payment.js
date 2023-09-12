import moment from 'moment'
export default {
	properties: [
		{
			text: 'N° Socio',
			key: 'partner.num',
			show: true,
			only_show: true,
		},
		{
			text: 'Socio',
			key: 'partner_id',
			type: 'text',
			only_show: true,
			value: '',
			is_title: true,
		},
		{
			text: 'Fecha de emision',
			key: 'issued_at',
			type: 'date',
			value: moment().format('YYYY-MM-DD'),
			is_date: true,
			show: true,
		},
		{
			text: 'Servicio',
			key: 'service_id',
			type: 'select',
			select_text_to_add: ' $', 
			select_text_prop_to_add: 'price',
			options_from_selected_model_prop: 'services',
			options_from_prop: 'partner.services',
			show: true,
			value: 0,
			required: true,
		},
		{
			text: 'Observaciones',
			key: 'observations',
			type: 'textarea',
			show: true,
		},
		{
			text: 'Cantidad',
			key: 'amount',
			type: 'number',
			is_price: true,
			is_title: true,
			description: 'Dejar en blanco para que se autocomplete con el precio actual del servicio',
		},
	],
	singular_model_name_spanish: 'Pago',
	plural_model_name_spanish: 'Pagos',
	create_model_name_spanish: 'Nuevo pago',
	text_delete: 'el',
}