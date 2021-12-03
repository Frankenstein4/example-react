const a = [
			{
				title: 'Node1',
				value: 'Tree',
				isShow:true,
				children: [
					{
						title: 'Child Node1',
						value: 'Tree-1',
						isShow:false,
					},
					{
						title: 'Child Node2',
						value: 'Tree-2',
						isShow:false,
						children: [
							{
								title: 'Child Node1',
								value: 'Tree-2-1',
								isShow:true,
								children: [
									{
										title: 'Child Node1',
										value: 'Tree-2-1-1',
										isShow:true,
										children: [
											{
												title: '11111111',
												value: '222222',
												isShow: true
											}
										]
									},
									{
										title: 'Child Node2',
										value: 'Tree-2-1-2',
										isShow:true,
									},
								],
							},
							{
								title: 'Child Node2',
								value: 'Tree-2-2',
								isShow:true,
							},
						],
					},
				],
			},
			{
				title: 'Node2',
				value: 'table',
				isShow:true,
				children: [
					{
						title: 'Child Node1',
						value: 'table-1',
						isShow:true
					},
					{
						title: 'Child Node2',
						value: 'table-2',
						isShow:false
					},
				],
			},
			{
				title: 'Node3',
				value: 'echarts',
				isShow:false
			}
		];
		console.log('aaaa', a);
		let brr = [];
		function fac(arr){
			if(arr.length){
				for (let i = 0; i < arr.length; i++) {
					const item = arr[i];
					if(item.isShow){
						if(item.children && item.children.length){
							let obj = {
								...item,
								children: []
							};
							for (let j = 0; j < item.children.length; j++) {
								const element = item.children[j];
								if(element.isShow){
									obj.children.push(element);
								}
							}
							brr.push(obj);
						}
					}
				}
			}
		}
		fac(a);
		console.log('aaaa', brr, 999);