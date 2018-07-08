<template>
	<div class="row">
			<div class="col-md-12">
				<vuestic-widget :headerText="'Product'">
					 <div class="col-md-12" style="flex-direction: row;display: flex;">
					 	<div class="col-md-3 d-flex justify-content-center align-items-center" style="border: 1px solid #eee'; " v-for="product in products">
							<div class="justify-content-center align-items-center" style="display: flex; flex-direction: column">
								<img :src="product.image" width="200px"/>
								<div class="justify-content-center align-items-center" style="display: flex; flex-direction: column">
									<div><h5>{{product.name}}</h5></div>
									<div><p>{{product.location}}</p></div>
									<div><p>{{product.expirtyDate}}</p></div>
									<div>
										<button class="btn btn-info ">
							                Edit
							            </button>
									</div>
								</div>
							</div>
						</div>
					 </div>
					 <div class="col-md-12" style="flex-direction: row;display: flex;">
					 	<div class="col-md-3 d-flex justify-content-center align-items-center" style="border: 1px solid #eee'; " v-for="product in products2">
							<div class="justify-content-center align-items-center" style="display: flex; flex-direction: column">
								<img :src="product.image" width="200px"/>
								<div class="justify-content-center align-items-center" style="display: flex; flex-direction: column">
									<div><h5>{{product.name}}</h5></div>
									<div><p>{{product.location}}</p></div>
									<div><p>{{product.expirtyDate}}</p></div>
									<div>
										<button class="btn btn-info ">
							                Edit
							            </button>
									</div>
								</div>
							</div>
						</div>
					 </div>
					 <div class="col-md-12" style="flex-direction: row;display: flex;">
					 	<div class="col-md-3 d-flex justify-content-center align-items-center" style="border: 1px solid #eee'; " v-for="product in products3">
							<div class="justify-content-center align-items-center" style="display: flex; flex-direction: column">
								<img :src="product.image" width="200px"/>
								<div class="justify-content-center align-items-center" style="display: flex; flex-direction: column">
									<div><h5>{{product.name}}</h5></div>
									<div><p>{{product.location}}</p></div>
									<div><p>{{product.expirtyDate}}</p></div>
									<div>
										<button class="btn btn-info ">
							                Edit
							            </button>
									</div>
								</div>
							</div>
						</div>
					 </div>
					 <div class="col-md-12" style="flex-direction: row;display: flex;">
					 	<div class="col-md-3 d-flex justify-content-center align-items-center" style="border: 1px solid #eee'; " v-for="product in products4">
							<div class="justify-content-center align-items-center" style="display: flex; flex-direction: column">
								<img :src="product.image" width="200px"/>
								<div class="justify-content-center align-items-center" style="display: flex; flex-direction: column">
									<div><h5>{{product.name}}</h5></div>
									<div><p>{{product.location}}</p></div>
									<div><p>{{product.expirtyDate}}</p></div>
									<div>
										<button class="btn btn-info ">
							                Edit
							            </button>
									</div>
								</div>
							</div>
						</div>
					 </div>
				</vuestic-widget>
			</div>
		</div>
</template>

<script>
export default {
	name: "product",
	data () {
		return {
			products: [
				{
					"name": "SAJO - Luncheon Meat",
					"location": "Lai Chi Kok",
					"expiryDate": "13-07-2018",
					"image": "https://images.hktvmall.com/h0001001/2c002306c5f770a9ae7f511fbb8951cb8f64edde/h0001001_h0888001_s_10006711_151104055846_01_300.jpg"
				}, 
				{
					"name": "Curry Beef Brisket",
					"location": "Lai Chi Kok",
					"expiryDate": "13-07-2018",
					"image": "https://images.hktvmall.com/h0888001/42825/h0888001_10014121_160517054130_01_300.jpg"
				},
				{
					"name": "Doshee - Pork Paste",
					"location": "Lai Chi Kok",
					"expiryDate": "13-07-2018",
					"image": "https://images.hktvmall.com/h0001001/ba6d44fe81b4ed1a08db0eae00ec28af44a61eac/h0001001_h0888001_s_10001625_151116114458_01_300.jpg"
				},
				{
					"name": "Spiced Pork Cubes",
					"location": "Lai Chi Kok",
					"expiryDate": "13-07-2018",
					"image": "https://images.hktvmall.com/h0888001/a62cc6a3700e0ad1de4c6c4951d0ebbfa64fbf33/h0888001_10005586_151110022936_01_300.jpg"
				}
			],
			products2: [
				{
					"name": "Salmon with Mayonnaise",
					"location": "Lai Chi Kok",
					"expiryDate": "13-07-2018",
					"image": "https://images.hktvmall.com/g3001001/3b4c395ab6d35a85367eebc5308ae021b998d538/g3001001_h0888001_s_10001617_170815034934_01_300.jpg"
				}, 
				{
					"name": "Duck Luncheon Meat",
					"location": "Lai Chi Kok",
					"expiryDate": "13-07-2018",
					"image": "https://images.hktvmall.com/h0888001/84375/h0888001_10017841_170307101559_01_300.jpg"
				},
				{
					"name": "Hairy Fig (110g)",
					"location": "Lai Chi Kok",
					"expiryDate": "13-07-2018",
					"image": "https://images.hktvmall.com/h0890002/5ed942f370971c5783417ba5fea0ae9298313900/h0890002_hhp81130_180319115839_01_300.jpg"
				},
				{
					"name": "Sardines in Tomato Sauce",
					"location": "Lai Chi Kok",
					"expiryDate": "13-07-2018",
					"image": "https://images.hktvmall.com/h0001001/4dcfa987fb3b2ba2290854c6047756f204810d1e/h0001001_h0888001_s_10005527_151104041522_01_300.jpg"
				}
			],
			products3: [
				{
					"name": "Sardines in Olive Oil",
					"location": "Lai Chi Kok",
					"expiryDate": "13-07-2018",
					"image": "https://images.hktvmall.com/h0888001/42825/h0888001_10009908_160517053717_01_300.jpg"
				}, 
				{
					"name": "Shrimp Pork Sauce",
					"location": "Lai Chi Kok",
					"expiryDate": "13-07-2018",
					"image": "https://images.hktvmall.com/h0955001/53583/h0955001_duhsiaoyueh0204_160824121926_01_300.jpg"
				},
				{
					"name": "Hairy Fig (110g)",
					"location": "Lai Chi Kok",
					"expiryDate": "13-07-2018",
					"image": "https://images.hktvmall.com/h0890002/5ed942f370971c5783417ba5fea0ae9298313900/h0890002_hhp81130_180319115839_01_300.jpg"
				},
				{
					"name": "Sardines in Tomato Sauce",
					"location": "Lai Chi Kok",
					"expiryDate": "13-07-2018",
					"image": "https://images.hktvmall.com/h0001001/4dcfa987fb3b2ba2290854c6047756f204810d1e/h0001001_h0888001_s_10005527_151104041522_01_300.jpg"
				}
			],
			products4: [
				{
					"name": "Sanma Kabayakieo",
					"location": "Lai Chi Kok",
					"expiryDate": "13-07-2018",
					"image": "https://images.hktvmall.com/h0888001/30d58c17a18888c05b7bab4e175ad4cc941abb72/h0888001_10018338_170420051140_01_300.jpg"
				}, 
				{
					"name": "Snow Fungus",
					"location": "Lai Chi Kok",
					"expiryDate": "13-07-2018",
					"image": "https://images.hktvmall.com/h0890002/c8b241e5e158f2d1bcb96be4af39e859e514065b/h0890002_hhp81150_180319120108_01_300.jpg"
				},
				{
					"name": "Opal Canned Abalone in Brown",
					"location": "Lai Chi Kok",
					"expiryDate": "13-07-2018",
					"image": "https://images.hktvmall.com/g5001001/140568/g5001001_10220664_171207114420_01_300.jpg"
				},
				{
					"name": "Fruit Cocktail in Syrup",
					"location": "Lai Chi Kok",
					"expiryDate": "13-07-2018",
					"image": "https://images.hktvmall.com/h0888001/d6d6925affdf3cb9acddc7d6439296bf44710dc0/h0888001_10005523_151110094802_01_300.jpg"
				}
			]
		}
	}
}
</script>