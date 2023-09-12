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
			text: 'N° documento',
			key: 'doc_number',
			type: 'text',
			value: '',
			show: true,
			use_to_check_if_is_repeat: true,
		},
		{
			text: 'Direccion',
			key: 'address',
			type: 'text',
			value: '',
			show: true,
		},
		{
			text: 'Observaciones',
			key: 'observations',
			type: 'textarea',
			value: '',
			show: true,
		},
		{
			text: 'Servicios',
			key: 'services',
			type: 'search',
			store: 'service',
			belongs_to_many: {
				model_name: 'service',
				props_to_show: [
					{
						text: 'Nombre',
						key: 'name',
						type: 'text',
						show: true,
					},
					{
						text: 'Precio',
						key: 'price',
						type: 'number',
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
			}
		}
	],
	singular_model_name_spanish: 'Socio',
	plural_model_name_spanish: 'Socios',
	create_model_name_spanish: 'Nuevo socio',
	text_delete: 'el',
}