class SecLargeElement 
{
	public static int secLarge(int [] arr){
		int frist = arr[0];
		int sec = arr[0];
		for(int num : arr){
			if(num > frist){
				sec = frist;
				frist = num;
			} else if(num > sec  && num != frist){
				sec = num;
			}
		}
		return sec;
	}
	public static void main(String[] args) 
	{
		int arr[] = {12,3,234,23};
		int ans = secLarge(arr);
		System.out.println(ans);
	}
}
