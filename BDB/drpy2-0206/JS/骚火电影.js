var rule={
title:'骚火',
host:'https://shdy3.com',
url:'/list/fyclass-fypage.html',
searchUrl:'/search.php?searchword=**',
searchable:2,
quickSearch:1,
filterable:0,
headers:{'User-Agent':'MOBILE_UA', },
class_name:'电影&电视剧&动漫',
class_url:'1&2&4',
推荐:'.v_list li;a&&title;.lazyload&&data-original;.v_note&&Text;a&&href',
一级:'.v_list li;a&&title;.lazyload&&data-original;.v_note&&Text;a&&href',
二级:{"title":"h1&&Text;","img":".lazyload&&data-original","desc":";;;.v_info_box&&p&&Text","content":".p_txt.show_part&&Text","tabs":".from_list li","lists":"#play_link:eq(#id) li a"},
搜索:'.v_list li;a&&title;.lazyload&&data-original;.v_note&&Text;a&&href',
}
