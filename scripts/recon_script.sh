#!/bin/bash
#recon scripts to scan target and run dirsearch
#input the target as command argument when running the script.
#variables

#this file contains functions of the scan modes
source ./scan.lib  
today=$(date)
user=$(who)
dirsearch_path="$HOME/Research/dirsearch"
echo "This scan was created on $today by $user"

#the command-line options
while getopts "m:i" option; do
	case $option in
	m)
		MODE=$OPTARG
		;;
	i)
		interactive=true
		;;
	esac
done

scan_target() {

	target=$1
	directory=${target}_recon
	echo "Creating a directory $directory"
	mkdir $directory
	
	case $MODE in
		nmap-only)
			nmap_scan
			;;
		dirsearch-only)
			dirsearch_scan
			;;
		crt-only)
			crt_scan
			;;
		*)
			nmap_scan
			dirsearch_scan
			crt_scan
			;;
	esac
}
	sleep 3
#generating a recon reports of the target domains
report_target(){
	target=$1
	directory=${target}_recon

	echo "GENERATING RECON REPORT FOR $target..."
	today=$(date)
	echo "This scan was created on $today" > $directory/report
	if [ -f $directory/nmap ];then
		echo "RESULT FOR NMAP: " >> $directory/report
		grep -E "^\s*\S+\s+\S+\s+\S+\s*$" $directory/nmap >> $directory/report
	fi
	if [ -f $directory.dirsearch]; then
		echo "RESULTS FOR DIRESEARCH: " >> $directory/report
		cat $directory/dirsearch >> $directory/report
	fi
	if [ -f $directory/crt ]; then
		echo "RESULT FOR CRT.SH" >> $directory/report
		jq -r ".[] | .name_value" $directory/crt >> $directory/report
	fi
}

if [ $interactive ];then
	input="blank"
	while [ $input != "quit" ];do
		echo "Please enter a domain: "
		read input
		if [ $input != "quit" ];then
			scan_target $input
			report_target $input
		fi
	done
else
	for i in "${@:OPTIND:$#}";do
		scan_target $i
		report_target $i
	done
fi


