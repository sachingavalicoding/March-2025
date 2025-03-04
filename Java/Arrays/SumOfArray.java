class SumOfArray 
{
	public static void main(String[] args) 
	{
		int arr[] = new int[3];
		int sum = 0;
		arr[0] = 40;
		arr[1] = 50;
		arr[2] = 60;
		for(int i : arr){
		 sum += i;
		}
		System.out.print(sum);
	}
}
