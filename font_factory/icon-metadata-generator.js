const fs = require('node:fs');
const path = require('node:path');

const { buildLibraryEntries } = require('./library-manifest');
const { getOutputDir } = require('./runtime-paths');

const CATEGORY_RULES = [
    { key: 'actions', keywords: ['add', 'remove', 'delete', 'copy', 'edit', 'replace', 'refresh', 'recover', 'restore', 'resend', 'reset', 'merge', 'approve', 'cancel', 'upload', 'download', 'export', 'import', 'create', 'send'] },
    { key: 'navigation', keywords: ['arrow', 'chevron', 'forward', 'back', 'move', 'fullscreen', 'maximize', 'minimize', 'expand', 'collapse', 'path'] },
    { key: 'communication', keywords: ['message', 'comment', 'email', 'reply', 'mention', 'chat', 'notification', 'megaphone', 'phone', 'call', 'mail'] },
    { key: 'files', keywords: ['file', 'folder', 'document', 'attachment', 'drive', 'image', 'archive', 'print', 'clipboard', 'book'] },
    { key: 'user', keywords: ['user', 'manager', 'organization', 'group', 'team', 'users', 'member', 'profile'] },
    { key: 'security', keywords: ['lock', 'unlock', 'permission', 'security', 'key', 'shield', 'forbidden'] },
    { key: 'status', keywords: ['info', 'error', 'favorite', 'thumbs', 'sparkle', 'question', 'alert', 'notice', 'bug'] },
    { key: 'layout', keywords: ['align', 'bullet', 'grid', 'table', 'sort', 'filter', 'flowchart', 'menu', 'view', 'spacing', 'layers'] },
    { key: 'device', keywords: ['device', 'cpu', 'smartphone', 'storage', 'globe', 'ip', 'bot', 'application', 'mouse', 'server', 'laptop', 'monitor', 'window'] },
    { key: 'time', keywords: ['time', 'date', 'datetime', 'schedule', 'timer', 'clock', 'history', 'pause', 'resume'] }
];

const PHRASE_OVERRIDES = {
    megaphone: {
        category: 'communication',
        keywords: ['announcement', 'broadcast', 'notification'],
        synonyms: ['공지', '알림', '안내', '방송', 'notice', 'alert']
    },
    no_image: {
        keywords: ['image', 'placeholder', 'missing'],
        synonyms: ['이미지 없음', '사진 없음', 'no image', 'placeholder']
    },
    question_mark: {
        keywords: ['question', 'help', 'support'],
        synonyms: ['질문', '도움말', '문의', 'help']
    },
    do_not_disturb: {
        keywords: ['focus', 'mute', 'silence'],
        synonyms: ['방해 금지', '집중 모드', 'dnd', 'mute']
    },
    ip_address: {
        category: 'device',
        keywords: ['network', 'address', 'ip'],
        synonyms: ['IP 주소', '아이피', 'address', 'network']
    },
    grid_view_md: {
        category: 'layout',
        keywords: ['grid', 'layout', 'view'],
        synonyms: ['그리드', '격자', 'grid', 'layout']
    }
};

const TOKEN_ALIASES = {
    add: { keywords: ['add', 'create', 'plus'], synonyms: ['추가', '생성', 'plus'] },
    alert: { keywords: ['alert', 'warning', 'notice'], synonyms: ['경고', '알림', '주의', 'alert'] },
    align: { keywords: ['align', 'layout'], synonyms: ['정렬', 'align', 'layout'] },
    apple: { keywords: ['apple', 'fruit'], synonyms: ['사과', 'apple'] },
    approve: { keywords: ['approve', 'confirm', 'accept'], synonyms: ['승인', '확인', 'accept'] },
    approval: { keywords: ['approval', 'approve', 'confirm'], synonyms: ['승인', '결재', 'approval'] },
    archive: { keywords: ['archive', 'store'], synonyms: ['보관', '아카이브', 'archive'] },
    arrow: { keywords: ['arrow', 'direction'], synonyms: ['화살표', '방향', 'arrow'] },
    attachment: { keywords: ['attachment', 'file'], synonyms: ['첨부', '첨부파일', 'attachment'] },
    auto: { keywords: ['auto', 'automatic'], synonyms: ['자동', 'auto'] },
    back: { keywords: ['back', 'previous'], synonyms: ['뒤로', '이전', 'back'] },
    backup: { keywords: ['backup', 'restore', 'safety'], synonyms: ['백업', 'backup', '복구'] },
    banana: { keywords: ['banana', 'fruit'], synonyms: ['바나나', 'banana'] },
    bird: { keywords: ['bird', 'animal'], synonyms: ['새', 'bird'] },
    bot: { keywords: ['bot', 'automation', 'robot'], synonyms: ['봇', '로봇', 'bot'] },
    book: { keywords: ['book', 'manual', 'guide'], synonyms: ['책', '매뉴얼', 'book'] },
    briefcase: { keywords: ['briefcase', 'business', 'work'], synonyms: ['서류가방', '업무', 'briefcase'] },
    broadcast: { keywords: ['broadcast', 'announce'], synonyms: ['방송', '전파', 'broadcast'] },
    bug: { keywords: ['bug', 'issue', 'error'], synonyms: ['버그', '문제', 'bug'] },
    bullet: { keywords: ['bullet', 'list'], synonyms: ['불릿', '목록', 'list'] },
    calendar: { keywords: ['calendar', 'date', 'schedule'], synonyms: ['캘린더', '일정', 'calendar'] },
    camera: { keywords: ['camera', 'photo'], synonyms: ['카메라', '사진', 'camera'] },
    cancel: { keywords: ['cancel', 'close', 'remove'], synonyms: ['취소', '닫기', 'cancel'] },
    card: { keywords: ['card', 'panel'], synonyms: ['카드', 'card'] },
    chat: { keywords: ['chat', 'conversation', 'message'], synonyms: ['채팅', '대화', 'chat'] },
    check: { keywords: ['check', 'complete', 'verify'], synonyms: ['체크', '확인', '완료', 'check'] },
    chevron: { keywords: ['chevron', 'direction'], synonyms: ['꺾쇠', '방향', 'chevron'] },
    circle: { keywords: ['circle', 'round'], synonyms: ['원형', 'circle'] },
    clipboard: { keywords: ['clipboard', 'paste', 'copy'], synonyms: ['클립보드', '붙여넣기', 'clipboard'] },
    clock: { keywords: ['clock', 'time'], synonyms: ['시계', '시간', 'clock'] },
    close: { keywords: ['close', 'dismiss'], synonyms: ['닫기', '종료', 'close'] },
    collapse: { keywords: ['collapse', 'compress'], synonyms: ['접기', '축소', 'collapse'] },
    comment: { keywords: ['comment', 'feedback'], synonyms: ['댓글', '코멘트', 'comment'] },
    company: { keywords: ['company', 'business'], synonyms: ['회사', '기업', 'company'] },
    copy: { keywords: ['copy', 'duplicate'], synonyms: ['복사', 'duplicate', 'copy'] },
    cpu: { keywords: ['cpu', 'processor', 'system'], synonyms: ['CPU', '프로세서', 'processor'] },
    create: { keywords: ['create', 'new', 'make'], synonyms: ['생성', '새로 만들기', 'create'] },
    crown: { keywords: ['crown', 'premium'], synonyms: ['왕관', '프리미엄', 'crown'] },
    date: { keywords: ['date', 'calendar'], synonyms: ['날짜', 'date'] },
    datetime: { keywords: ['datetime', 'schedule', 'timestamp'], synonyms: ['일시', '날짜 시간', 'datetime'] },
    delete: { keywords: ['delete', 'remove', 'trash'], synonyms: ['삭제', '지우기', 'delete'] },
    detail: { keywords: ['detail', 'info'], synonyms: ['상세', '세부정보', 'detail'] },
    device: { keywords: ['device', 'hardware'], synonyms: ['디바이스', '기기', 'device'] },
    disturb: { keywords: ['disturb', 'interrupt'], synonyms: ['방해', 'interrupt'] },
    document: { keywords: ['document', 'doc', 'file'], synonyms: ['문서', 'document', 'doc'] },
    dot: { keywords: ['dot', 'point'], synonyms: ['점', 'dot', 'point'] },
    double: { keywords: ['double', 'pair'], synonyms: ['이중', 'double'] },
    down: { keywords: ['down', 'lower'], synonyms: ['아래', 'down'] },
    download: { keywords: ['download', 'save'], synonyms: ['다운로드', '받기', 'download'] },
    drive: { keywords: ['drive', 'storage'], synonyms: ['드라이브', '저장소', 'drive'] },
    dropdown: { keywords: ['dropdown', 'menu'], synonyms: ['드롭다운', '메뉴', 'dropdown'] },
    edit: { keywords: ['edit', 'modify', 'write'], synonyms: ['편집', '수정', 'edit'] },
    education: { keywords: ['education', 'learning'], synonyms: ['교육', '학습', 'education'] },
    email: { keywords: ['email', 'mail', 'message'], synonyms: ['이메일', '메일', 'email', 'mail'] },
    emoji: { keywords: ['emoji', 'reaction'], synonyms: ['이모지', '이모티콘', 'emoji'] },
    error: { keywords: ['error', 'warning', 'issue'], synonyms: ['오류', '에러', '문제', 'error'] },
    exit: { keywords: ['exit', 'leave'], synonyms: ['나가기', '종료', 'exit'] },
    expand: { keywords: ['expand', 'stretch'], synonyms: ['펼치기', '확장', 'expand'] },
    export: { keywords: ['export', 'outbound', 'share'], synonyms: ['내보내기', 'export'] },
    favorite: { keywords: ['favorite', 'star', 'bookmark'], synonyms: ['즐겨찾기', 'favorite', 'bookmark'] },
    file: { keywords: ['file', 'document'], synonyms: ['파일', '문서', 'file'] },
    filter: { keywords: ['filter', 'refine'], synonyms: ['필터', '정렬', 'filter'] },
    flowchart: { keywords: ['flowchart', 'process', 'diagram'], synonyms: ['플로우차트', '순서도', 'flowchart'] },
    folder: { keywords: ['folder', 'directory', 'storage'], synonyms: ['폴더', '디렉터리', 'folder', 'directory'] },
    forbidden: { keywords: ['forbidden', 'blocked'], synonyms: ['금지', '차단', 'forbidden'] },
    forward: { keywords: ['forward', 'next'], synonyms: ['앞으로', '다음', 'forward'] },
    fullscreen: { keywords: ['fullscreen', 'expand'], synonyms: ['전체 화면', 'fullscreen'] },
    globe: { keywords: ['globe', 'world', 'internet'], synonyms: ['지구본', '세계', 'globe'] },
    graph: { keywords: ['graph', 'chart'], synonyms: ['그래프', '차트', 'graph'] },
    grid: { keywords: ['grid', 'layout'], synonyms: ['그리드', '격자', 'grid'] },
    group: { keywords: ['group', 'team'], synonyms: ['그룹', '팀', 'group'] },
    hamburger: { keywords: ['menu', 'hamburger', 'navigation'], synonyms: ['햄버거 메뉴', '메뉴', 'navigation'] },
    heart: { keywords: ['heart', 'favorite'], synonyms: ['하트', '좋아요', 'heart'] },
    hide: { keywords: ['hide', 'conceal'], synonyms: ['숨기기', 'hide'] },
    history: { keywords: ['history', 'record', 'log'], synonyms: ['이력', '기록', 'history'] },
    home: { keywords: ['home', 'main'], synonyms: ['홈', '메인', 'home'] },
    image: { keywords: ['image', 'picture', 'photo'], synonyms: ['이미지', '사진', 'image'] },
    import: { keywords: ['import', 'inbound'], synonyms: ['가져오기', 'import'] },
    info: { keywords: ['info', 'information', 'detail'], synonyms: ['정보', '안내', 'info'] },
    initialize: { keywords: ['initialize', 'setup', 'reset'], synonyms: ['초기화', 'setup', 'initialize'] },
    ip: { keywords: ['ip', 'address', 'network'], synonyms: ['IP', '아이피', 'ip'] },
    justify: { keywords: ['justify', 'align'], synonyms: ['양쪽 정렬', 'justify'] },
    key: { keywords: ['key', 'security', 'access'], synonyms: ['키', '열쇠', 'key'] },
    laptop: { keywords: ['laptop', 'computer'], synonyms: ['노트북', 'laptop'] },
    layers: { keywords: ['layers', 'stack'], synonyms: ['레이어', 'layers'] },
    left: { keywords: ['left', 'previous'], synonyms: ['왼쪽', 'left'] },
    link: { keywords: ['link', 'url', 'connect'], synonyms: ['링크', '연결', 'link'] },
    list: { keywords: ['list', 'items'], synonyms: ['목록', '리스트', 'list'] },
    location: { keywords: ['location', 'place', 'map'], synonyms: ['위치', '장소', 'location'] },
    lock: { keywords: ['lock', 'security', 'private'], synonyms: ['잠금', '보안', 'lock'] },
    log: { keywords: ['log', 'record', 'history'], synonyms: ['로그', '기록', 'log'] },
    mail: { keywords: ['mail', 'email', 'message'], synonyms: ['메일', '이메일', 'mail'] },
    manual: { keywords: ['manual', 'guide'], synonyms: ['매뉴얼', '가이드', 'manual'] },
    manager: { keywords: ['manager', 'admin'], synonyms: ['관리자', '매니저', 'manager'] },
    maximize: { keywords: ['maximize', 'expand'], synonyms: ['최대화', 'maximize'] },
    md: { keywords: ['medium', 'md'], synonyms: ['중간', 'medium', 'md'] },
    megaphone: { keywords: ['megaphone', 'announcement'], synonyms: ['메가폰', '공지', 'megaphone'] },
    mention: { keywords: ['mention', 'tag'], synonyms: ['멘션', '언급', 'mention'] },
    merge: { keywords: ['merge', 'combine'], synonyms: ['병합', '합치기', 'merge'] },
    message: { keywords: ['message', 'chat', 'comment'], synonyms: ['메시지', '메세지', 'message'] },
    minimize: { keywords: ['minimize', 'collapse'], synonyms: ['최소화', 'minimize'] },
    monitor: { keywords: ['monitor', 'screen', 'display'], synonyms: ['모니터', '화면', 'monitor'] },
    more: { keywords: ['more', 'overflow', 'menu'], synonyms: ['더보기', '추가 메뉴', 'more'] },
    mouse: { keywords: ['mouse', 'pointer'], synonyms: ['마우스', 'pointer', 'mouse'] },
    move: { keywords: ['move', 'reposition'], synonyms: ['이동', 'move'] },
    navigation: { keywords: ['navigation', 'browse'], synonyms: ['탐색', 'navigation'] },
    no: { keywords: ['none', 'no'], synonyms: ['없음', 'not', 'no'] },
    notification: { keywords: ['notification', 'notice', 'alert'], synonyms: ['알림', '공지', 'notification', 'notice'] },
    off: { keywords: ['off', 'disabled'], synonyms: ['꺼짐', '비활성', 'off'] },
    on: { keywords: ['on', 'enabled'], synonyms: ['켜짐', '활성', 'on'] },
    opinion: { keywords: ['opinion', 'feedback', 'comment'], synonyms: ['의견', '피드백', 'opinion'] },
    order: { keywords: ['order', 'sort'], synonyms: ['순서', '정렬', 'order'] },
    organization: { keywords: ['organization', 'org', 'company'], synonyms: ['조직', 'organization', 'org'] },
    original: { keywords: ['original', 'source'], synonyms: ['원본', '기본', 'original'] },
    path: { keywords: ['path', 'route'], synonyms: ['경로', 'path'] },
    pause: { keywords: ['pause', 'stop', 'hold'], synonyms: ['일시정지', 'pause'] },
    permission: { keywords: ['permission', 'access', 'authorization'], synonyms: ['권한', '허용', 'permission'] },
    phone: { keywords: ['phone', 'call', 'contact'], synonyms: ['전화', '통화', 'phone'] },
    pin: { keywords: ['pin', 'fixed'], synonyms: ['고정', '핀', 'pin'] },
    play: { keywords: ['play', 'start'], synonyms: ['재생', '시작', 'play'] },
    plus: { keywords: ['plus', 'add'], synonyms: ['플러스', '추가', 'plus'] },
    point: { keywords: ['point', 'mark'], synonyms: ['포인트', '점', 'point'] },
    policy: { keywords: ['policy', 'rule'], synonyms: ['정책', '규칙', 'policy'] },
    position: { keywords: ['position', 'location'], synonyms: ['위치', '포지션', 'position'] },
    preview: { keywords: ['preview', 'look', 'view'], synonyms: ['미리보기', 'preview'] },
    print: { keywords: ['print', 'printer'], synonyms: ['인쇄', '프린트', 'print'] },
    prompt: { keywords: ['prompt', 'ai', 'input'], synonyms: ['프롬프트', '입력', 'prompt'] },
    question: { keywords: ['question', 'help'], synonyms: ['질문', '도움', 'question'] },
    read: { keywords: ['read', 'opened'], synonyms: ['읽음', '확인', 'read'] },
    recover: { keywords: ['recover', 'restore'], synonyms: ['복구', 'recover'] },
    recovery: { keywords: ['recovery', 'restore'], synonyms: ['복구', 'recovery'] },
    refresh: { keywords: ['refresh', 'reload', 'sync'], synonyms: ['새로고침', '갱신', 'refresh'] },
    remove: { keywords: ['remove', 'subtract', 'minus'], synonyms: ['제거', '삭제', 'remove'] },
    replace: { keywords: ['replace', 'swap'], synonyms: ['교체', '바꾸기', 'replace'] },
    reply: { keywords: ['reply', 'respond'], synonyms: ['답장', '응답', 'reply'] },
    resend: { keywords: ['resend', 'send again'], synonyms: ['재전송', '다시 보내기', 'resend'] },
    reset: { keywords: ['reset', 'initialize'], synonyms: ['초기화', '재설정', 'reset'] },
    restore: { keywords: ['restore', 'recover'], synonyms: ['복원', 'restore'] },
    resume: { keywords: ['resume', 'continue'], synonyms: ['재개', 'resume'] },
    right: { keywords: ['right', 'next'], synonyms: ['오른쪽', 'right'] },
    rotate: { keywords: ['rotate', 'turn'], synonyms: ['회전', 'rotate'] },
    rule: { keywords: ['rule', 'policy'], synonyms: ['규칙', '정책', 'rule'] },
    schedule: { keywords: ['schedule', 'plan', 'calendar'], synonyms: ['일정', '예약', 'schedule'] },
    search: { keywords: ['search', 'find', 'lookup'], synonyms: ['검색', '찾기', 'search'] },
    security: { keywords: ['security', 'protection'], synonyms: ['보안', 'security'] },
    send: { keywords: ['send', 'submit'], synonyms: ['보내기', '전송', 'send'] },
    semantic: { keywords: ['semantic', 'meaning', 'smart'], synonyms: ['의미 기반', 'semantic'] },
    server: { keywords: ['server', 'backend', 'system'], synonyms: ['서버', '시스템', 'server'] },
    setting: { keywords: ['settings', 'config', 'setup'], synonyms: ['설정', 'settings'] },
    settings: { keywords: ['settings', 'config', 'setup'], synonyms: ['설정', 'settings'] },
    share: { keywords: ['share', 'send'], synonyms: ['공유', 'share'] },
    shield: { keywords: ['shield', 'protect', 'security'], synonyms: ['보호', '쉴드', 'shield'] },
    sm: { keywords: ['small', 'sm'], synonyms: ['작은', 'small', 'sm'] },
    smartphone: { keywords: ['smartphone', 'mobile'], synonyms: ['스마트폰', '모바일', 'smartphone'] },
    sort: { keywords: ['sort', 'order'], synonyms: ['정렬', 'sort'] },
    spacing: { keywords: ['spacing', 'gap', 'layout'], synonyms: ['간격', 'spacing'] },
    star: { keywords: ['star', 'favorite'], synonyms: ['별', '즐겨찾기', 'star'] },
    step: { keywords: ['step', 'footprint'], synonyms: ['단계', '발자국', 'step'] },
    storage: { keywords: ['storage', 'drive', 'disk'], synonyms: ['저장소', '스토리지', 'storage'] },
    tag: { keywords: ['tag', 'label'], synonyms: ['태그', '라벨', 'tag'] },
    table: { keywords: ['table', 'grid'], synonyms: ['테이블', '표', 'table'] },
    thumbs: { keywords: ['thumbs', 'reaction'], synonyms: ['좋아요', '싫어요', 'thumbs'] },
    time: { keywords: ['time', 'clock', 'schedule'], synonyms: ['시간', '시계', 'time'] },
    timer: { keywords: ['timer', 'countdown'], synonyms: ['타이머', 'timer'] },
    tone: { keywords: ['tone', 'style'], synonyms: ['톤', '분위기', 'tone'] },
    top: { keywords: ['top', 'upper'], synonyms: ['위', 'top'] },
    track: { keywords: ['track', 'monitor'], synonyms: ['추적', 'tracking', 'track'] },
    unlock: { keywords: ['unlock', 'open'], synonyms: ['잠금 해제', 'unlock'] },
    up: { keywords: ['up', 'upper'], synonyms: ['위', 'up'] },
    upload: { keywords: ['upload', 'send'], synonyms: ['업로드', '올리기', 'upload'] },
    user: { keywords: ['user', 'account', 'person'], synonyms: ['사용자', '유저', '계정', 'user'] },
    users: { keywords: ['users', 'group', 'team'], synonyms: ['사용자들', '팀', '그룹', 'users'] },
    ux: { keywords: ['ux', 'experience'], synonyms: ['UX', '사용자 경험'] },
    view: { keywords: ['view', 'layout', 'display'], synonyms: ['보기', '뷰', 'view'] },
    vertical: { keywords: ['vertical', 'column'], synonyms: ['세로', 'vertical'] },
    window: { keywords: ['window', 'screen'], synonyms: ['창', 'window'] },
    write: { keywords: ['write', 'compose'], synonyms: ['작성', 'write'] }
};

function uniq(values) {
    return Array.from(new Set(values.filter(Boolean)));
}

function sanitizeToken(token = '') {
    return token.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function getBaseKey(glyphKey = '') {
    return glyphKey.replace(/_(line|fill)$/, '');
}

function tokenizeGlyphKey(glyphKey = '') {
    return getBaseKey(glyphKey)
        .split(/[_-]+/)
        .flatMap((part) => part.match(/[a-z]+|\d+/gi) || [])
        .map((token) => token.toLowerCase())
        .filter(Boolean);
}

function inferCategory(glyphKey = '') {
    const baseKey = getBaseKey(glyphKey);
    const override = PHRASE_OVERRIDES[baseKey];
    if (override?.category) {
        return override.category;
    }

    const haystack = tokenizeGlyphKey(glyphKey);
    for (const rule of CATEGORY_RULES) {
        if (haystack.some((token) => rule.keywords.includes(token))) {
            return rule.key;
        }
    }
    return 'misc';
}

function buildKeywords(glyphKey = '', displayName = '') {
    const baseKey = getBaseKey(glyphKey);
    const tokens = tokenizeGlyphKey(glyphKey);
    const override = PHRASE_OVERRIDES[baseKey];
    const values = [];

    if (override?.keywords) {
        values.push(...override.keywords);
    }

    for (const token of tokens) {
        const alias = TOKEN_ALIASES[sanitizeToken(token)];
        if (alias?.keywords?.length) {
            values.push(...alias.keywords);
        } else {
            values.push(token);
        }
    }

    values.push(displayName.toLowerCase());
    return uniq(values).slice(0, 8);
}

function buildSynonyms(glyphKey = '', displayName = '') {
    const baseKey = getBaseKey(glyphKey);
    const tokens = tokenizeGlyphKey(glyphKey);
    const override = PHRASE_OVERRIDES[baseKey];
    const spaced = baseKey.replace(/[_-]+/g, ' ').trim().toLowerCase();
    const values = [
        displayName.toLowerCase(),
        spaced,
        baseKey
    ];

    if (override?.synonyms) {
        values.push(...override.synonyms);
    }

    for (const token of tokens) {
        const alias = TOKEN_ALIASES[sanitizeToken(token)];
        if (alias?.synonyms?.length) {
            values.push(...alias.synonyms);
        } else {
            values.push(token);
        }
    }

    return uniq(values).slice(0, 12);
}

function buildMetadataCatalog(cssContent = '', existingMetadata = {}) {
    const existingIcons = existingMetadata.icons || {};
    const icons = {};

    for (const entry of buildLibraryEntries(cssContent)) {
        const current = existingIcons[entry.key] || {};
        const generated = {
            displayName: current.displayName || entry.displayName,
            category: current.category || inferCategory(entry.key),
            keywords: current.keywords?.length ? current.keywords : buildKeywords(entry.key, entry.displayName),
            synonyms: current.synonyms?.length ? current.synonyms : buildSynonyms(entry.key, entry.displayName)
        };
        icons[entry.key] = generated;
    }

    return {
        $schema: './icon-metadata.schema.json',
        version: 1,
        icons
    };
}

function generateMetadataFile(metadataPath) {
    const cssPath = path.join(getOutputDir(), 'my-icon-font.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    const existingMetadata = fs.existsSync(metadataPath)
        ? JSON.parse(fs.readFileSync(metadataPath, 'utf8'))
        : {};
    const catalog = buildMetadataCatalog(cssContent, existingMetadata);
    fs.writeFileSync(metadataPath, `${JSON.stringify(catalog, null, 2)}\n`);
    return catalog;
}

module.exports = {
    inferCategory,
    buildKeywords,
    buildSynonyms,
    buildMetadataCatalog,
    generateMetadataFile
};
