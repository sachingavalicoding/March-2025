class PrimeNum1
{
	public static void main(String[] args) 
	{
		int n = 11;
		boolean isPrime = true;
		for(int i = 2; i * i < n ; i++){
			if(n % i == 0){
				isPrime = false;	
			}
		}
		System.out.println( isPrime ? " Prime Number  " : " Not a Prime Number " );
	}
}
