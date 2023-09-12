export default {
	properties: [
		{
			text: 'N°',
			key: 'num',
			type: 'text',
			value: '',
			show: true,
			not_show_on_form: true,
			use_to_filter_in_search: true,
		},
		{
			text: 'Nombre',
			key: 'name',
			type: 'text',
			value: '',
			is_title: true,
		},
		{
			text: 'Precio',
			key: 'price',
			type: 'number',
			is_price: true,
			value: '',
			show: true,
		},
		{
			text: 'Descripcion',
			key: 'description',
			type: 'textarea',
			value: '',
			show: true,
		},
	],
	singular_model_name_spanish: 'Servicio',
	plural_model_name_spanish: 'Servicios',
	create_model_name_spanish: 'Nuevo servicio',
	text_delete: 'el',
}